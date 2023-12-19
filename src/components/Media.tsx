import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 font-medium font-mono text-center  max-sm:flex-col ">
        2024: A9-A10
      </div>

      <div className=" text-center font-mono">
        打赏地址☕️(小熊地址): 0x887E895e37B6F70E61797EB1Ec5Ca23dBDFE754e
      </div>

      <div className=" text-center font-mono">
        说明: 程序默认账号gas打完为止
      </div>
    </div>
  );
}
