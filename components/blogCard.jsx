import Link from "next/link"


const BlogCard=({blogPost:{title,date,id}})=>{
 return (
    <div className="text-left p-2.5 w-full m-auto my-2 ">
    <h2 className="mb-1 font-medium">{title}</h2>
    <small>{date}</small>
    <br/>
    <Link href={`/blogs/${id}`}><a><button>Read</button></a></Link>
  </div>
 )
}
export default BlogCard