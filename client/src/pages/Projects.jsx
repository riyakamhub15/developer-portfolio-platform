import {useState,useEffect} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ProjectToolbar from "../components/ProjectToolbar";

import ProjectGrid from "../components/ProjectGrid";

import EmptyState from "../components/EmptyState";

import {getProjects} from "../services/projectService";

function Projects(){

    const [projects,setProjects]=useState([]);

    const [search,setSearch]=useState("");

    useEffect(()=>{

        fetchProjects();

    },[]);

    const fetchProjects=async()=>{

        try{

            const res=await getProjects();

            setProjects(res.data);

        }

        catch(error){

            console.log(error);

        }

    };

    const filteredProjects=

    projects.filter(project=>

        project.title

        .toLowerCase()

        .includes(

            search.toLowerCase()

        )

    );

    return(

        <DashboardLayout>

            <div className="p-8">

                <h1 className="text-4xl font-bold">

                    Projects

                </h1>

                <ProjectToolbar

                    search={search}

                    setSearch={setSearch}

                />

                {

                    filteredProjects.length===0 ?

                    <EmptyState/>

                    :

                    <ProjectGrid

                        projects={filteredProjects}

                    />

                }

            </div>

        </DashboardLayout>

    );

}

export default Projects;