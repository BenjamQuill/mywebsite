export default function Skill({title, what}) {
            if (what) {
                return(
                    <div className="px-6 p-4">
                        <p className="m-2 text-gray-300 text-3xs">
                        {title}
                        </p>
                        {
                        what.map((res)=> {
                            return (
                                <span 
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                                        key={res}
                                    >#{res}
                                    </span>
                            )
                            
                        }) 
                        }
                    </div>
                )
            }
}