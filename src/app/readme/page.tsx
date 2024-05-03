'use client';

import { NextPage } from 'next';

import Readme from '@/common/contents/readme.mdx';

const Page: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          width="130"
          src="https://github.com/YunShiZhiBan.png"
          alt="YunShiZhiBan logo"
        />
        <h1 className="flex w-full justify-center">云师智伴 网站</h1>
        <h3>虚拟教师 AI 数智人</h3>
        <a href="https://github.com/OuYuHuaXia/Website2.0-FE">
          <strong className="text-blue-800 underline">探索项目文档 »</strong>
        </a>
        <br />
        <div className="flex justify-center gap-2">
          <img
            src="https://img.shields.io/github/license/YunShiZhiBan/YunShiZhiBan-FE"
            alt="language"
          />
          <img
            src="https://img.shields.io/github/languages/top/YunShiZhiBan/YunShiZhiBan-FE"
            alt="license"
          />
          <img
            src="https://img.shields.io/github/last-commit/YunShiZhiBan/YunShiZhiBan-FE"
            alt="last"
          />
        </div>
        <div className="flex justify-center gap-2 text-blue-800 underline">
          <a href="https://yunshizhiban.vercel.app/" target="_blank">
            在线体验
          </a>
          <a href="https://github.com/OuYuHuaXia/Website2.0-FE/issues">
            报告Bug
          </a>
          <a href="https://github.com/OuYuHuaXia/Website2.0-FE/issues">
            提出新特性
          </a>
        </div>
      </div>
      <Readme />
    </>
  );
};

export default Page;
