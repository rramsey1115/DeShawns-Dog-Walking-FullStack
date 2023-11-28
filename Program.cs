// collections of data -------------------------------------------------------------------------------------
List<Dog> dogs = new List<Dog>(){
    new()
    {
        id = 1,
        name = "Mr. Zoombo",
        about = "Mr. Zoombo is wild and always has, you guessed it, the ZOOMIES. He needs to be walked while we are away at work to help release some of his energy!"
        cityId = 1,
        walkerId = null,
        picUrl = "https://images.pexels.com/photos/8895723/pexels-photo-8895723.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 2,
        name = "Cheesecake",
        about = "Cheesecake is super lazy and chubby, so she needs to be walked more often than we can provide. She might take some convincing to get outside, but she's a sweetheart."
        cityId = 2,
        walkerId = 1,
        picUrl = "https://images.pexels.com/photos/5274345/pexels-photo-5274345.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 3,
        name = "Max",
        about = "Max is the smartest and most well-behaved dog around! You will love taking him out while we are away from home."
        cityId = 3,
        walkerId = 2,
        picUrl = "https://images.pexels.com/photos/13312610/pexels-photo-13312610.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 4,
        name = "Jeni",
        about = "Jeni may not be the smartest, but she's the sweetest and loves meeting other dogs out and about."
        cityId = 2,
        walkerId = 1,
        picUrl = "https://images.pexels.com/photos/7483187/pexels-photo-7483187.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 5,
        name = "Bartholemew",
        about = "Bart loves meetin new people and new animal friends. He does like to pull, so please help us train him up!"
        cityId = 3,
        walkerId = null,
        picUrl = "https://images.pexels.com/photos/8895723/pexels-photo-8895723.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 6,
        name = "Barbie",
        about = "Barbie is a girly girl, who loves to wear cute outfits when she goes out. She isn't particularly friendly to other dogs, but won't bite."
        cityId = 1,
        walkerId = 1,
        picUrl = "https://images.pexels.com/photos/4597758/pexels-photo-4597758.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 7,
        name = "Stewie",
        about = "Stewie is an energetic big goof ball who loves to play with other dogs. A trip to the dog park to get off the leash would be his best option."
        cityId = 2,
        walkerId = 3,
        picUrl = "https://images.pexels.com/photos/7276657/pexels-photo-7276657.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 8,
        name = "Macy",
        about = "Macy is an older girl, she loves to walk, but needs to be alone. She can get jealous and territorial if sharing her walker's attention."
        cityId = 3,
        walkerId = 2,
        picUrl = "https://images.pexels.com/photos/13085125/pexels-photo-13085125.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 9,
        name = "Buck",
        about = "Buck is a faithful farm dog who is in retirement. He loves exercise and being outside to remind him of his glory days."
        cityId = 2,
        walkerId = 3,
        picUrl = ""
    },
    new()
    {
        id = 10,
        name = "Trixie",
        about = "Trixie is tiny but mighty. She packs a lot of energy into her little body. She is fun and playful and would prefere if she could be around other dogs while on her walks."
        cityId = 1,
        walkerId = null,
        picUrl = "https://images.pexels.com/photos/994174/pexels-photo-994174.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
}
List<City> cities = new List<City>(){
    new()
    {
        id = 1,
        name = "Nashville"
    },
    new()
    {
        id = 2,
        name = "Franklin"
    },
    new()
    {
        id = 3,
        name = "Murfreesboro"
    }
}
List<Walker> walkers = new List<Walker>(){
    new()
    {
        id = 1,
        name = "David W.",
        about = "David has been walking dogs for DeShawn's for 3 years. He loves interacting with the poochies, even the tough to deal with ones. Consider your pet in hands as good as your own when you choose Jonathon as your walker!",
        picUrl = "https://images.pexels.com/photos/2599509/pexels-photo-2599509.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 2,
        name = "Alexis M.",
        about = "Alexis has grown up around dogs, her parents are both veterinarians, and she is currently in veterinary school herself! You're helping out a poor college student while also having your fur baby greatly taken care of!",
        picUrl = "https://images.pexels.com/photos/4076339/pexels-photo-4076339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 3,
        name = "Michaela T.",
        about = "Michaela is new to DeShawn's but has been walking dogs for neighbors and family members since she was in high school. She recently graduated from NSS and is a budding software developer who loves animals so she decided to join the DeShawn's team.",
        picUrl = "https://images.pexels.com/photos/7752806/pexels-photo-7752806.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        id = 4,
        name = "Brant C.",
        about = "Brant likes dogs more than people and will do anything to spend more time with dogs and less time with people.",
        picUrl = "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
}
List<WalkerCity> walkerCities = new List<WalkerCity>(){
    new()
    {
        id = 1,
        walkerId = 1,
        cityId = 1
    },
    new()
    {
        id = 2,
        walkerId = 1,
        cityId = 2
    },
    new()
    {
        id = 3,
        walkerId = 2,
        cityId = 1
    },
    new()
    {
        id = 4,
        walkerId = 2,
        cityId = 2
    },
    new()
    {
        id = 5,
        walkerId = 3,
        cityId = 1
    },
    new()
    {
        id = 6,
        walkerId = 3,
        cityId = 2
    },
    new()
    {
        id = 7,
        walkerId = 4,
        cityId = 3
    }
}




// app setup ------------------------------------------------------------------------------------------------
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build()
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection()




//  Generate End Points -----------------------------------------------------------------------------------
app.MapGet("/api/dogs", () =>
{
    return dogs.Select(dog =>
    new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        About = dog.About,
        CityId = dog.CityId,
        WalkerId = dog.WalkerId
        PicUrl = dog.PicUrl
    });
});


app.Run();
