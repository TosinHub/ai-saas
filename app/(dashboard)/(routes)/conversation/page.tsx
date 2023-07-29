import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'

const Conversation = () => {
  return (
    <div>

        <Heading 
        
        title='Conversation'
        description="Most advanced conversation model"
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
        />

        <div className="px-4 lg:px-8">
            
        </div>
    </div>
  )
}

export default Conversation