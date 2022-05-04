import Image from "next/image";

export default function Avatar({ className, border, image }) {
  return (
    <div className={`${className ? className : "relative flex items-center justify-center mb-2 w-[158px] h-[158px]"}`}>
      <Image
        className={`!border-solid ${
          border ? border : "!border-[2.67px]"
        } !border-orange-peel rounded-full p-0 m-0`}
        layout="fill"
        objectFit="cover"
        src={image}
      />
    </div>
  );
}

