

export default async function Page() {
    const response = await fetch('http://127.0.0.1:2333/blog/categories',{ cache: 'no-store' })
    const data = await response.json();  
    return (
        <>
            {console.log(data)}
        </>
    )
}