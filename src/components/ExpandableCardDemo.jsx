export function ExpandableCardDemo({ active, setActive }) {
 return (
   <div className="fixed inset-0 grid place-items-center z-[100]">
     <motion.div
       layoutId={`card-${active.title}`}
       className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
     >
       <div className="p-4">
         <motion.h3
           layoutId={`title-${active.title}`}
           className="font-bold text-neutral-700 dark:text-neutral-200"
         >
           {active.title}
         </motion.h3>
         <motion.p
           layoutId={`description-${active.description}`}
           className="text-neutral-600 dark:text-neutral-400"
         >
           {active.description}
         </motion.p>
       </div>

       <div className="pt-4 relative px-4">
         <motion.div
           layout
           className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
         >
           {typeof active.content === "function" ? active.content() : active.content}
         </motion.div>
       </div>

       <motion.button
         key={`close-${active.title}`}
         layout
         className="absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
         onClick={() => setActive(null)}
       >
         <CloseIcon />
       </motion.button>
     </motion.div>
   </div>
 );
}
