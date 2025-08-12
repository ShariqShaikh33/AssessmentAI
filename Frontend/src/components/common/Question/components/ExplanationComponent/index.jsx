import { Sparkle } from 'lucide-react'


function ExplanationComponent({explanation = "", showExplanation=true}) {
    if(!explanation || !showExplanation) return ;

    return (
        <div className='flex flex-col gap-2'>
            <h3 className='flex items-center gap-1 font-semibold text-base'>
                <Sparkle size={20}/> Explanation
            </h3>

            <div className='text-xs flex flex-col gap-2  border border-blue=500 bg-blue-50 rounded-lg p-4 max-h-[200px] overflow-y-auto'>
                {explanation}
            </div>
        </div>
    )
}

export default ExplanationComponent
