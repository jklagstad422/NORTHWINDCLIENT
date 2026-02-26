using Microsoft.EntityFrameworkCore;
using NORTHWINDCLIENT.Models; 

var builder = WebApplication.CreateBuilder(args);

// 1. Connect to the WCTC SQL Server
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllersWithViews();

var app = builder.Build();

// 2. Enable CSS, JS, and Images from wwwroot
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// 3. Updated route: App now starts at Product/Category instead of Home/Index
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Product}/{action=Category}/{id?}");

app.Run();