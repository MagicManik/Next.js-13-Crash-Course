import { Link } from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`);
    return await response.json();
}

const Repo = async ({ name }) => {

    const repo = await fetchRepo(name);
    console.log(repo); //this console log out put show on vscode terminal only.

    return (
        <>
            <h3 className='text-xl font-bold pb-2 pt-5'>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details flex justify-between pt-2">
                <span className='flex items-center gap-2'>
                    <FaStar /> {repo.stargazers_count}
                </span>
                <span className='flex items-center gap-2'>
                    <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className='flex items-center gap-2'>
                    <FaEye /> {repo.watchers_count}
                </span>
            </div>
        </>
    );
}

export default Repo;