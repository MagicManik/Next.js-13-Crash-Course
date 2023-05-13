import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    const contents = await response.json();
    return contents;
};

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');

    return (
        <>
            <h3 className="my-3 text-lg font-bold">Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link className="underline text-blue-700 decoration-blue-700" href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default RepoDirs;