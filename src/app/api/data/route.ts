import { exec } from 'child_process';
import { NextRequest, NextResponse } from 'next/server';
import { ChildProcess } from 'node:child_process';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      // 解析请求体中的JSON数据
      const data = await req.json();

      // 调用Python脚本
      const cmd = `python inference.py --driven_audio ${data.driven_audio} \
                    --source_image ${data.source_image} \
                    --result_dir results \
                    ${data.still ? '--still' : ''} \
                    --preprocess ${data.preprocess} \
                    --enhancer ${data.enhancer}`; // 构建完整的命令
      const childProcess: ChildProcess = exec(cmd);

      // 将子进程的stdout和stderr设置为流
      childProcess.stdout!.on('data', (data) => {
        // 实时发送stdout数据给客户端
        return new NextResponse(JSON.stringify(data), { status: 200 });
      });

      childProcess.stderr!.on('data', (data) => {
        // 实时发送stderr数据给客户端
        return new NextResponse(JSON.stringify(data), { status: 200 });
      });

      // 当子进程结束时发送结束标记
      childProcess.on('close', (code) => {
        // eslint-disable-next-line no-console
        console.log('end：', `\nProcess exited with code ${code}`);
        return new NextResponse(`\nProcess exited with code ${code}`, {
          status: 200,
        });
      });

      // 处理可能的错误
      childProcess.on('error', () => {
        return new NextResponse('Internal Error', { status: 500 });
      });
    } catch (error) {
      return new NextResponse('Internal Error', { status: 500 });
    }
  } else {
    return new NextResponse('Method not allowed', { status: 405 });
  }
}
