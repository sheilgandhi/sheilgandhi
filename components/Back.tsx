import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";

const Back = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <p>HOME</p>
    </div>
  );
};

export default Back;
