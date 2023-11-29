using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http.Json;

// collections of data -------------------------------------------------------------------------------------
List<Dog> dogs = new List<Dog>()
{
    new()
    {
        Id = 1,
        Name = "Mr. Zoombo",
        About = "Mr. Zoombo is wild and always has, you guessed it, the ZOOMIES. He needs to be walked while we are away at work to help release some of his energy!",
        CityId = 1,
        WalkerId = 0,
        PicUrl = "https://images.pexels.com/photos/8895723/pexels-photo-8895723.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 2,
        Name = "Cheesecake",
        About = "Cheesecake is super lazy and chubby, so she needs to be walked more often than we can provIe. She might take some convincing to get outsIe, but she's a sweetheart.",
        CityId = 2,
        WalkerId = 1,
        PicUrl = "https://images.pexels.com/photos/5274345/pexels-photo-5274345.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 3,
        Name = "Max",
        About = "Max is the smartest and most well-behaved dog around! You will love taking him out while we are away from home.",
        CityId = 3,
        WalkerId = 2,
        PicUrl = "https://images.pexels.com/photos/13312610/pexels-photo-13312610.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 4,
        Name = "Jeni",
        About = "Jeni may not be the smartest, but she's the sweetest and loves meeting other dogs out and about.",
        CityId = 2,
        WalkerId = 1,
        PicUrl = "https://images.pexels.com/photos/7483187/pexels-photo-7483187.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 5,
        Name = "Bartholemew",
        About = "Bart loves meetin new people and new animal friends. He does like to pull, so please help us train him up!",
        CityId = 3,
        WalkerId = 0,
        PicUrl = "https://images.pexels.com/photos/8895723/pexels-photo-8895723.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 6,
        Name = "Barbie",
        About = "Barbie is a girly girl, who loves to wear cute outfits when she goes out. She isn't particularly friendly to other dogs, but won't bite.",
        CityId = 1,
        WalkerId = 1,
        PicUrl = "https://images.pexels.com/photos/4597758/pexels-photo-4597758.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 7,
        Name = "Stewie",
        About = "Stewie is an energetic big goof ball who loves to play with other dogs. A trip to the dog park to get off the leash would be his best option.",
        CityId = 2,
        WalkerId = 3,
        PicUrl = "https://images.pexels.com/photos/7276657/pexels-photo-7276657.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 8,
        Name = "Macy",
        About = "Macy is an older girl, she loves to walk, but needs to be alone. She can get jealous and territorial if sharing her walker's attention.",
        CityId = 3,
        WalkerId = 2,
        PicUrl = "https://images.pexels.com/photos/13085125/pexels-photo-13085125.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 9,
        Name = "Buck",
        About = "Buck is a faithful farm dog who is in retirement. He loves exercise and being outside to remind him of his glory days.",
        CityId = 2,
        WalkerId = 3,
        PicUrl = "https://images.pexels.com/photos/4695939/pexels-photo-4695939.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 10,
        Name = "Trixie",
        About = "Trixie is tiny but mighty. She packs a lot of energy into her little body. She is fun and playful and would prefere if she could be around other dogs while on her walks.",
        CityId = 1,
        WalkerId = 0,
        PicUrl = "https://images.pexels.com/photos/994174/pexels-photo-994174.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
};
List<City> cities = new List<City>(){
    new()
    {
        Id = 1,
        Name = "Nashville"
    },
    new()
    {
        Id = 2,
        Name = "Franklin"
    },
    new()
    {
        Id = 3,
        Name = "Murfreesboro"
    }
};
List<Walker> walkers = new List<Walker>(){
    new()
    {
        Id = 1,
        Name = "David W.",
        About = "David has been walking dogs for DeShawn's for 3 years. He loves interacting with the poochies, even the tough to deal with ones. Consider your pet in hands as good as your own when you choose Jonathon as your walker!",
        PicUrl = "https://images.pexels.com/photos/2599509/pexels-photo-2599509.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 2,
        Name = "Alexis M.",
        About = "Alexis has grown up around dogs, her parents are both veterinarians, and she is currently in veterinary school herself! You're helping out a poor college student while also having your fur baby greatly taken care of!",
        PicUrl = "https://images.pexels.com/photos/4076339/pexels-photo-4076339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 3,
        Name = "Michaela T.",
        About = "Michaela is new to DeShawn's but has been walking dogs for neighbors and family members since she was in high school. She recently graduated from NSS and is a budding software developer who loves animals so she decided to join the DeShawn's team.",
        PicUrl = "https://images.pexels.com/photos/7752806/pexels-photo-7752806.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new()
    {
        Id = 4,
        Name = "Brant C.",
        About = "Brant likes dogs more than people and will do anything to spend more time with dogs and less time with people.",
        PicUrl = "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
};
List<WalkerCity> walkerCities = new List<WalkerCity>(){
    new()
    {
        Id = 1,
        WalkerId = 1,
        CityId = 1
    },
    new()
    {
        Id = 2,
        WalkerId = 1,
        CityId = 2
    },
    new()
    {
        Id = 3,
        WalkerId = 2,
        CityId = 1
    },
    new()
    {
        Id = 4,
        WalkerId = 2,
        CityId = 2
    },
    new()
    {
        Id = 5,
        WalkerId = 3,
        CityId = 1
    },
    new()
    {
        Id = 6,
        WalkerId = 3,
        CityId = 2
    },
    new()
    {
        Id = 7,
        WalkerId = 4,
        CityId = 3
    }
};




// app setup ------------------------------------------------------------------------------------------------
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();




//  Generate End Points -----------------------------------------------------------------------------------

// get all dogs---------------
app.MapGet("/api/dogs", () =>
{
    return dogs.Select(dog =>
    {
        City city = cities.FirstOrDefault(c => c.Id == dog.CityId);
        Walker walker = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);

        if (walker == null)
        {
            walker = new Walker
            {
                Id = 0,
                Name = " ",
                About = " ",
                PicUrl = " ",
            };
        };

        DogDTO newDogObj = new DogDTO
        {
            Id = dog.Id,
            Name = dog.Name,
            About = dog.About,
            CityId = dog.CityId,
            City = new CityDTO
            {
                Id = city.Id,
                Name = city.Name
            },
            WalkerId = dog.WalkerId,
            Walker = new WalkerDTO
            {
                Id = walker.Id,
                Name = walker.Name,
                About = walker.About,
                PicUrl = walker.PicUrl
            },
            PicUrl = dog.PicUrl
        };
        return newDogObj;
    }
    ).ToList();
});


app.Run();
