import React from "react";
import Image from "next/image";

function Avatar() {
  return (
    <div>
      <div className="inline-block items- my-2">
        <Image
          src="/avatar.png"
          alt=""
          width={50}
          height={1}
          className="mx-6 border-solid border-2 border-orange-500 rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Avatar;
