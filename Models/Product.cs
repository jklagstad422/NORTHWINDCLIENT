using System.ComponentModel.DataAnnotations.Schema;

namespace NORTHWINDCLIENT.Models;

public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; } = null!;
    public int CategoryId { get; set; }
    
    // Add these missing fields:
    public string? QuantityPerUnit { get; set; }

    [Column(TypeName = "decimal(18,4)")]
    public decimal UnitPrice { get; set; }

    public short? UnitsInStock { get; set; }
    public short? UnitsOnOrder { get; set; }
    public short? ReorderLevel { get; set; }
    public bool Discontinued { get; set; }

    // Navigation property
    public Category? Category { get; set; }
}