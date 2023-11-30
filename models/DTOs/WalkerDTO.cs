namespace DeShawns.Models.DTOs;

public class WalkerDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string About { get; set; }
    public string PicUrl { get; set; }
    public List<City> Cities { get; set; }
}