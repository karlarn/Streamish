import React from "react"

const VideoForm =()=>
{
    // const handleControlledInputChange = (event) => {
    //     const newVideo = { ...video }
    //     let selectedVal = event.target.value
    //     newVideo[event.target.id] = selectedVal
    //     setVideo(newVideo)
    // }

    // const handleClickSaveVideo = (event) => {
    //     event.preventDefault()
    //     addAnimal(animal)
    //         .then(() => {
    //             alert(`You added ${animal.name} to your enCounter list and gained ${animal.xp} XP!`)
    //         })
    //         .then(() => { navigate("/home") })
    // }   
    return (
    <>

        <h1 >Add a video:</h1>
        <form >
            <div >
                <fieldset>
                    <div >
                        <label htmlFor="title">title</label><br />
                        <input type="text" id="title"  required placeholder="Video title"  />
                    </div>
                </fieldset>
                <fieldset>
                    <div >
                        <label htmlFor="description">description</label><br />
                        <input type="text" id="description" required placeholder="Description"  />
                    </div>
                </fieldset>
                <fieldset>
                    <div >
                        <label htmlFor="url">description</label><br />
                        <input type="text" id="url"  required placeholder="Url"  />
                    </div>
                </fieldset>
                <button type="button" className="btn btn-primary"
                    >
                    Add Video
                </button>
            </div>
        </form>
    </>
)
}
export default VideoForm;