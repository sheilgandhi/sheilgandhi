import Image from "next/image"


function Skills() {
    return (
        <div className="w-screen[-100px] h-56 flex items-center justify-evenly object-contain mx-10 grayscale-0">
            <Image src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="react" width={150} height={100} />
            <Image src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' alt="nodejs" width={150} height={100} />
            <Image src='https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' alt="mongodb" width={150} height={100} />
            <Image src='https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' alt="firebase" width={150} height={100} />
            <Image src='https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' alt="java" width={150} height={100} />
            <Image src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' alt="git" width={150} height={100} />
        </div>
    )
}

export default Skills
