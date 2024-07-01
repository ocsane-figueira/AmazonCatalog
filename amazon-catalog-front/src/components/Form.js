import { useForm } from "react-hook-form";


const Form = ({ onSubmit, animal = {} }) => {

    const { register, handleSubmit, formState: { dirtyFields } } = useForm({defaultValues: animal});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input type="text" {...register("name", { required: true })} class="form-control" aria-label="Title" aria-describedby="basic-addon1" />
            </div>
            
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                </div>
                <input type="text" {...register("title")} class="form-control" aria-label="Title" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">Imagem (https://)</span>
                </div>
                <input type="url" {...register("uriImage")} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">Description</span>
                </div>
                <textarea {...register("description")} class="form-control" ></textarea>
            </div>
            
            {!!Object.keys(dirtyFields).length && <input type="submit" className="btn btn-secondary" />}
        </form>
    )
}

export default Form;