import Link from 'next/link';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/bradtraversy/repos',
        {
            next: {
                revalidate: 60,
            },
        }
    );

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Maybe it is not necessary for this component. Just wait 1 second to show the loader !!

    // return await response.json(); or
    const repos = await response.json();
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    // console.log(repos); //this console log out put show on vs code terminal only.

    return (
        <div className='devconf-bg px-24 py-10'>
            <h2 className='text-4xl text-white pb-3'>Repositories</h2>
            <ul className="repo-list grid grid-cols-3 gap-8">
                {repos.map((repo) => (
                    <li className='border-4 rounded-md border-green-500 p-5 text-white' key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3 className='text-xl font-bold pb-2'>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details flex justify-between pt-2 text-white">
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
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReposPage;