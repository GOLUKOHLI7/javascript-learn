


let name="dipesh";
 console.log(name.charAt())
 console.log(name.charCodeAt())
 console.log(name.at())

let place = "dehradun is my favourita place is it i am live";
 console.log(place.includes("place"));

let live = "wher do you live here and why are you still here";
   let starts = live.endsWith(
    "still her"
   );
    console.log(starts);

console.log(
     live.indexOf("why"),
     live.lastIndexOf("here")
)

console.log(
    place.search("my")
)

console.log(
    live.replace("do","i"),
    live.replaceAll("wher do you live here",
        "yes this is my annd you have to go now tha'ts it it accutully usuafull items "
    )
)


let where = "this is me";
  console.log(
    where.slice(-1)
  )

  console.log(
    where.substring(-1)
  )

  console.log(
    where.substr(-2)
  ) 