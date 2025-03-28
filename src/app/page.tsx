import { Button } from "@heroui/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";


export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl">Hello</h1>
      <Button 
        as={Link}
        href="/members"
        color="primary" 
        variant="bordered"
        startContent={<FaRegSmile size={20}/>}
      >
        Click me
      </Button>
    </div>
  );
}
