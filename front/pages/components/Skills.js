import Skill from './Skill'

export default function Skills({title, skills}) {
    return (
        <div className="w-full m-5 self-stretch border rounded-lg overflow-hidden shadow-xl md:shadow-lg">
            <div className="w-80">
                <div className="font-bold text-black text-4xs m-2">{title}
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