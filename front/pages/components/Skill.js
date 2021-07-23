export default function Skills({title, what}) {
    return (
        <div class="px-6 p-4">
            <p class="m-4 text-gray-300 text-base">
            {title}
            </p>
            {
               what.map((res)=> (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{res}</span>
               )) 
            }
        </div>
    )
}