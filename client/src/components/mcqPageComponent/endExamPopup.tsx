

function App() {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-[420px] rounded-2xl px-6 py-8 shadow-[0_12px_25px_rgba(0,0,0,0.2)] text-center animate-slide-up">
        <div className="text-5xl text-red-500 mb-4">⚠️</div>
        
        <h2 className="text-[22px] text-gray-900 mb-4 font-medium">
          Are you sure you want to end the exam?
        </h2>
        
        <div className="text-left my-5 text-[15px] text-gray-600 leading-[26px]">
          <p className="relative pl-6 before:content-['✔_'] before:absolute before:left-0 before:text-teal-600 before:font-bold">
            You can't undo this action.
          </p>
          <p className="relative pl-6 before:content-['✔_'] before:absolute before:left-0 before:text-teal-600 before:font-bold">
            Once you quit, your exam will be submitted immediately.
          </p>
          <p className="relative pl-6 before:content-['✔_'] before:absolute before:left-0 before:text-teal-600 before:font-bold">
            All unanswered questions will be marked as zero.
          </p>
        </div>
        
        <div className="flex justify-between mt-5 gap-5">
          <button 
            className="flex-1 py-3 border-none rounded-lg text-[15px] font-semibold cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-br from-red-500 to-red-600 text-white hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(231,76,60,0.5)]"
          >
            Quit Exam
          </button>
          <button 
            className="flex-1 py-3 border-none rounded-lg text-[15px] font-semibold cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-br from-green-500 to-green-600 text-white hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(46,204,113,0.5)]"
          >
            Continue Exam
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;