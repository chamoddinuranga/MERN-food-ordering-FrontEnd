import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-[#44bd32]" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to කමුද.lk</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-[#44bd32]">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;