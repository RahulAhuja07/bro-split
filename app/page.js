import Image from "next/image";
import {Button, buttonVariants} from "@/components/ui/button";
export default function Home() {
  return (
    <div> Hello 
      <br/>
      <Button variant= {"destructive"}> click me</Button>
    </div>
    
  );
}
