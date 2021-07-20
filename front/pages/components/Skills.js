import Skill from './Skill'

export default function Skills({title, skills}) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-green-800 text-xl mb-2">{title}
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