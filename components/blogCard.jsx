import Link from "next/link"


const BlogCard=({blogPost:{title,description,shortDescription,date,duration,link}})=>{
 return (
    <div className="text-left p-2.5 w-full m-auto my-2  leading-6">
    <h2 className="text-xl md:text-2xl mb-2 font-medium">{title}</h2>
    <small>{date} </small>|
    <small className="mx-1">{duration}</small>
    <br/>
    <p>{description}</p>
    <a href={link}><button className=" px-4 py-1 mt-4 rounded-none bg-black  text-white">Read</button></a>
  </div>
 )
}
export default BlogCard