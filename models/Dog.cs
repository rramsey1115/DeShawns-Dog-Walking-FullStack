namespace DeShawns.Models;
using DeShawns.Models.DTOs;

public class Dog
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string About { get; set; }
    public int CityId { get; set; }
    public CityDTO City { get; set; }
    public int WalkerId { get; set; }
    public WalkerDTO Walker { get; set; }
    public string PicUrl { get; set; }
}