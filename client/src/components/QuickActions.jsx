import Button from "./Button";

function QuickActions(){

    return(

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">

                Quick Actions

            </h2>

            <div className="flex gap-4 flex-wrap">

                <Button>

                    Add Project

                </Button>

                <Button variant="secondary">

                    Edit Profile

                </Button>

                <Button>

                    View Portfolio

                </Button>

            </div>

        </div>

    );

}

export default QuickActions;