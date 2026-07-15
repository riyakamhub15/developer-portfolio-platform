function ProjectToolbar({ search, setSearch }) {

    return (

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <input

                type="text"

                value={search}

                onChange={(e) => setSearch(e.target.value)}

                placeholder="Search Projects..."

                className="w-full md:w-96 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

            />

        </div>

    );

}

export default ProjectToolbar;