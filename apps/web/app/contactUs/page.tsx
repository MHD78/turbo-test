import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      Contact Us
      <Image
        src="/images/contactUs.png"
        alt="Contact Us"
        width={100}
        height={100}
      />
    </div>
  );
}

export default page;
