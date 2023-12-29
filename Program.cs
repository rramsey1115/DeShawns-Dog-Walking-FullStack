using DeShawns.Models;
using DeShawns.Models.DTOs;

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
        PicUrl = "https://images.pexels.com/photos/13581209/pexels-photo-13581209.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        CityId = 3
    },
    new()
    {
        Id = 5,
        WalkerId = 3,
        CityId = 3
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
        CityId = 1
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

// get all dogs------------------
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

// get dog by Id------------------
app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog currentDog = dogs.FirstOrDefault(dog => dog.Id == id);
    City city = cities.FirstOrDefault(c => c.Id == currentDog.CityId);
    Walker walker = walkers.FirstOrDefault(w => w.Id == currentDog.WalkerId);

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

    DogDTO DogObj = new DogDTO
    {
        Id = currentDog.Id,
        Name = currentDog.Name,
        About = currentDog.About,
        CityId = currentDog.CityId,
        City = new CityDTO
        {
            Id = city.Id,
            Name = city.Name
        },
        WalkerId = currentDog.WalkerId,
        Walker = new WalkerDTO
        {
            Id = walker.Id,
            Name = walker.Name,
            About = walker.About,
            PicUrl = walker.PicUrl
        },
        PicUrl = currentDog.PicUrl
    };
    return DogObj;
});

// delete dog by id---------------
app.MapDelete("/api/dogs/{id}", (int id) => {
    Dog deleteDog = dogs.FirstOrDefault(d => d.Id == id);
    dogs.Remove(deleteDog);
});

// add new dog -------------------
app.MapPost("/api/dogs", (Dog newDogObj) => {

    // find matching city object based on newDogObj.CityId
    City dogCity = cities.FirstOrDefault(city => city.Id == newDogObj.CityId);

    // if dog is null cancel request and return error
    if (dogCity == null)
    {
        return Results.BadRequest();
    }

    // add newDogObj
    dogs.Add(newDogObj);

    // returns a 201 code with link in the headers where new resource can be accessed
    return Results.Created($"/details/{newDogObj.Id}", new DogDTO
    {
        Id = newDogObj.Id,
        Name = newDogObj.Name,
        About = newDogObj.About,
        CityId = newDogObj.CityId,
        City = new CityDTO
        {
            Id = dogCity.Id,
            Name = dogCity.Name
        },
        WalkerId = 0,
        PicUrl = newDogObj.PicUrl
    });
});

// get all cities-----------------
app.MapGet("/api/cities", () =>
{
    return cities.Select(city =>
    new CityDTO
    {
        Id = city.Id,
        Name = city.Name,
    });
});

// add city -----------------------
app.MapPost("/api/cities/{cityName}", (string cityName) =>
{
    City city = new City()
    {
        Id = cities.Max(c => c.Id) + 1,
        Name = cityName
    };

    cities.Add(city);

    return Results.Created($"/api/cities/{city.Id}", new CityDTO
    {
        Id = city.Id,
        Name = city.Name
    });
});

// get all walkerCities------------
app.MapGet("/api/walkerCities", () =>
{
    return walkerCities.Select(wc =>
    {
        City city = cities.FirstOrDefault(c => c.Id == wc.CityId);
        Walker walker = walkers.FirstOrDefault(w => w.Id == wc.WalkerId);

        WalkerCityDTO newWalkerCity = new WalkerCityDTO
        {
            Id = wc.Id,
            WalkerId = wc.WalkerId,
            Walker = new WalkerDTO
            {
                Id = walker.Id,
                Name = walker.Name,
                About = walker.About,
                PicUrl = walker.PicUrl
            },
            CityId = wc.CityId,
            City = new CityDTO
            {
                Id = city.Id,
                Name = city.Name
            }
        };
        return newWalkerCity;
    });
});

// get all walkers-----------------
app.MapGet("/api/walkers", () =>
{
    return walkers.Select(walker =>
    {
        List<WalkerCity> walkerCitiesForWalker = walkerCities.Where(wc => wc.WalkerId == walker.Id).ToList();
        List<City> citiesForWalker = walkerCitiesForWalker.Select(wc => cities.First(c => c.Id == wc.CityId)).ToList();

        WalkerDTO walkerDto = new WalkerDTO
        {
            Id = walker.Id,
            Name = walker.Name,
            PicUrl = walker.PicUrl,
            About = walker.About,
            Cities = citiesForWalker
        };
        return walkerDto;
    }
    ).ToList();
});

// get walker by Id----------------
app.MapGet("/api/walkers/{id}", (int id) =>
{

    // finds matching walker by id provided
    Walker walker = walkers.FirstOrDefault(w => w.Id == id);
    if (walker == null)
    {
        return Results.NotFound();
    }

    // finds walkerCity and City data to embed into walker object
    List<WalkerCity> walkerCitiesForWalker = walkerCities.Where(wc => wc.WalkerId == walker.Id).ToList();
    List<City> citiesForWalker = walkerCitiesForWalker.Select(wc => cities.First(c => c.Id == wc.CityId)).ToList();

    // return resulting WalkerDTO to client
    return Results.Ok(new WalkerDTO
    {
        Id = walker.Id,
        Name = walker.Name,
        PicUrl = walker.PicUrl,
        About = walker.About,
        Cities = citiesForWalker
    });
});

// edit walker info by id-----------
app.MapPut("/api/walkers/{id}", (int id, Walker updatedWalker) =>
{
    // updates walkerCities in the database
    var walkersCities = walkerCities.Where(wc => wc.WalkerId != updatedWalker.Id).ToList();

    foreach (City city in updatedWalker.Cities)
    {
        WalkerCity newWC = new WalkerCity
        {
            WalkerId = updatedWalker.Id,
            CityId = city.Id,
        };
        newWC.Id = walkersCities.Count > 0 ? walkersCities.Max(wc => wc.Id) + 1 : 1;
        walkersCities.Add(newWC);
    }

    walkerCities = walkersCities;

    // updates the walker object in the database
    Walker walkerToUpdate = walkers.FirstOrDefault(wtu => wtu.Id == id);

    if (walkerToUpdate == null)
    {
        return Results.NotFound();
    }
    if (id != updatedWalker.Id)
    {
        return Results.BadRequest();
    }

    walkerToUpdate.Id = updatedWalker.Id;
    walkerToUpdate.Name = updatedWalker.Name;
    walkerToUpdate.About = updatedWalker.About;
    walkerToUpdate.PicUrl = updatedWalker.PicUrl;
    walkerToUpdate.Cities = updatedWalker.Cities;

    return Results.NoContent();

});

// delete walker and associated dog assignments
app.MapDelete("/api/walkers/{id}", (int id) => {
    // find matching walker object using id 
    var walkerToDelete = walkers.FirstOrDefault(w => w.Id == id);

    if (walkerToDelete == null)
    {
        return Results.NotFound();
    }

    // find dogs with matching walkerId & set walkerId to 0 for those dogs
    foreach(Dog dog in dogs) {
        if (dog.WalkerId == id)
        {
            dog.WalkerId = 0;
        }
    }

    // delete walker from database
    walkers.Remove(walkerToDelete);

    return Results.NoContent();

});

// assign dog to walker------------
app.MapPut("/api/dogs/{id}", (int id, Dog dog) =>
{
    Dog dogToUpdate = dogs.FirstOrDefault(d => d.Id == id);

    if (dogToUpdate == null)
    {
        return Results.NotFound();
    }
    if (id != dog.Id)
    {
        return Results.BadRequest();
    }

    dogToUpdate.WalkerId = dog.WalkerId;

    return Results.NoContent();
});


app.Run();
