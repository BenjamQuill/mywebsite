import Skill from './Skill'

export default function Skills({title, skills}) {
    return (
        <div className="max-w-sm self-stretch border rounded-lg m-5 overflow-hidden shadow-xl md:shadow-lg">
            <div className="">
                <div className="font-bold text-black-800 text-2xl m-2">{title}
                </div>   
            </div>
        {
            skills.map((skill) => (
                <Skill 
                    title={skill.title}
                    what={skill.what}
                />
            ))
        }
        </div> 
    )
}