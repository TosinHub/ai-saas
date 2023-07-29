
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
    children: React.ReactNode;
    content: React.ReactNode; // Add the 'content' prop
  }
 
export default function ToolTip({children, content} : Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
         {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}