import Link from "next/link";
import Repo from "@/app/components/Repo/Repo";
import RepoDirs from "@/app/components/RepoDirs/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
    return (
        <div className="border-2 border-pink-500 w-96 p-4 rounded m-12">
            <Link href='/code/repos' className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1 inline-block">
                Back To Repositories
            </Link>
            <Suspense fallback={<div className="my-4 text-blue-800">Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div className="my-4 text-blue-800">Loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    );
}

export default RepoPage;