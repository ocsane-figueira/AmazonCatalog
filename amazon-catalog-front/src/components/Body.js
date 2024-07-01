
const Body = ({ children }) => {
    return (
        <div className='pt-2 container marketing'>
            <div className='container-marketing background-color'>
                <div className='row gap-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Body;