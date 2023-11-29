namespace DeShawns.Models;
using DeShawns.Models.DTOs;

public class WalkerCity 
{
    public int Id { get; set; }
    public int WalkerId { get; set; }
    public int CityId { get; set; }
    public CityDTO City { get; set; }
}