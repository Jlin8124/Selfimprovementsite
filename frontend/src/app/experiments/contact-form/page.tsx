export default function ContactForm() {
    return (
    <>
            <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg 
            border border-gray-200">
            <h2 className=" text-2xl font-bold mb-6 text-gray-800"> Get In Touch </h2> 

            <form className="space-y-4">
                <div>
                    <label className="block text-lg font-medium text-black mb-1">
                        Full Name
                    </label>
                    <input 
                        type ="text"
                        placeholder="Jason Lin"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus:ring-blue-500 bg-white"
                        /* What is that width dependent on */
                        />
                    <label className="block text-lg font-medium text-black mb-1">
                        Email
                        </label>
                        <input
                        type = "email"
                        placeholder = "youremail@hotmail.com"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                    <label className="block text-lg font-medium text-black mb-1">
                        Topic
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus:ring-blue-500 bg-white mb-2">
                        <option> General Inquiry </option>
                        <option> Support </option>
                        <option> Feedback </option>
                        
                        </select>
                        <button
                            type = "button"
                            className="w-full bg-blue-600 text-white fond-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        > Send Message
                        </button>
                </div>


            </form>
    </div>
    </>
    );
}