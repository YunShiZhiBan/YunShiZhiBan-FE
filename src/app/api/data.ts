import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';
import { ChildProcess } from 'node:child_process';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // 解析请求体中的JSON数据
      const data = req.body.data;

      // 调用Python脚本
      const cmd = `python inference.py --driven_audio ${data.driven_audio} \
                    --source_image ${data.source_image} \
                    --result_dir results \
                    ${data.still ? '--still' : ''} \
                    --preprocess ${data.preprocess} \
                    --enhancer ${data.enhancer}`; // 构建完整的命令
      const childProcess: ChildProcess = exec(cmd);

      // 将子进程的stdout和stderr设置为流
      childProcess.stdout.on('data', (data) => {
        // 实时发送stdout数据给客户端
        res.write(data);
      });

      childProcess.stderr.on('data', (data) => {
        // 实时发送stderr数据给客户端
        res.write(data);
      });

      // 当子进程结束时发送结束标记
      childProcess.on('close', (code) => {
        res.end(`\nProcess exited with code ${code}`);
      });

      // 处理可能的错误
      childProcess.on('error', (error) => {
        res.status(500).json({ error: error.message });
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};