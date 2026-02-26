namespace NORTHWINDCLIENT.Models; // No curly braces here!

public class Category
{
    public int CategoryId { get; set; }
    public string CategoryName { get; set; } = null!;
    public string? Description { get; set; }
}