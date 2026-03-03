using Microsoft.AspNetCore.Mvc;
using NORTHWINDCLIENT.Models;
using Microsoft.EntityFrameworkCore;

namespace NORTHWINDCLIENT.Controllers;

public class ProductController : Controller
{
    private readonly DataContext _context;

    public ProductController(DataContext context)
    {
        _context = context;
    }

    // Sorted categories
    public IActionResult Category()
    {
        var categories = _context.Categories
            .OrderBy(c => c.CategoryName)
            .ToList();

        return View(categories);
    }

    // Filtered products (NO discontinued)
    public IActionResult Index(int id)
    {
        var products = _context.Products
            .Where(p => p.CategoryId == id && !p.Discontinued)
            .OrderBy(p => p.ProductName)
            .ToList();

        ViewBag.CategoryName = _context.Categories
            .Where(c => c.CategoryId == id)
            .Select(c => c.CategoryName)
            .FirstOrDefault();

        return View(products);
    }
}