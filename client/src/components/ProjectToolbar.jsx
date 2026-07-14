import Button from "./Button";

function ProjectToolbar({

    search,

    setSearch

}){

    return(

        <div className="flex justify-between items-center mb-10">

            <input

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                placeholder="Search Project..."

                className="border rounded-lg px-4 py-3 w-80"

            />

        </div>

    );

}

export default ProjectToolbar;