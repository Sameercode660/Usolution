export default function AssignmentComponent({question, answer}){
    return(
        <>
            <div className="question1 w-5/6 m-auto sm:w-2/3 sm:m-auto md:w-1/2 md:m-auto">
            <h1 className='text-center text-md text-white'>{question}</h1>
            <div className='overflow-auto bg-gray-950 text-white rounded-lg mt-2 p-5 mb-5'>
                <pre>
                    <code>
                         {answer}
                    </code>
                </pre>
            </div>
        </div>
        </>
    )
}
