using Microsoft.AspNetCore.Mvc;
using NORTHWINDCLIENT.Models;
using Microsoft.EntityFrameworkCore;

namespace NORTHWINDCLIENT.Controllers;

public class ProductController : Controller
{
    private readonly DataContext _context;

    // Dependency Injection: This pulls in your WCTC connection from Program.cs
    public ProductController(DataContext context)
    {
        _context = context;
    }

    // Displays the list of 8 Categories
    public IActionResult Category()
    {
        var categories = _context.Categories.OrderBy(c => c.CategoryName).ToList();
        return View(categories);
    }

    // Displays products for a specific category (e.g., Beverages)
    public IActionResult Index(int id)
    {
        var category = _context.Categories.Find(id);
        if (category == null) return NotFound();

        ViewBag.CategoryName = category.CategoryName;

        var products = _context.Products
            .Where(p => p.CategoryId == id)
            .OrderBy(p => p.ProductName)
            .ToList();

        return View(products);
    }
}