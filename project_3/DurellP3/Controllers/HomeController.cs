using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DurellP3.Models;
using DurellP3.Services;
namespace DurellP3.Controllers;
using Newtonsoft.Json;
using System.Dynamic;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        ViewData["nav"] = "Home"; //for nav bar highlighting 
        return View();
    }

    public async Task<IActionResult> About()
    {
        ViewData["nav"] = "About Us";

        //go out and get the data
        DataRetrieval dataR = new DataRetrieval();
        var loadedAbout = await dataR.getData("about/");
        //cast the result to JSON
        //load the Model and put the JSON into it
            // cast into AboutModel object and send in big string of loadedAbout
        var returnAbout = JsonConvert.DeserializeObject<AboutModel>(loadedAbout);
        returnAbout.pageTitle = "About Us";
        //send off to the view 
        return View(returnAbout);
    }

    public async Task<IActionResult> People() {
        ViewData["nav"] = "People";

        DataRetrieval dataR = new DataRetrieval();
        var loadedPeople = await dataR.getData("people/");

        var returnPeople = JsonConvert.DeserializeObject<PeopleModel>(loadedPeople);
        returnPeople.pageTitle = "Our People";
        return View(returnPeople);
    }

    //to pass in two view - two views shoved into one view (combo)
    //public async Task<IActionResult> DynTest() {
    //    //load the data
    //    DataRetrieval dataR = new DataRetrieval();
    //    //tell the instance to go get the data
    //    var loadedAbout = await dataR.getData("about/");
    //    //cast it to json and the object we want 
    //    var returnAbout = JsonConvert.DeserializeObject<AboutModel>(loadedAbout);

    //    //get second
    //    var loadedCourse = await dataR.getData("course/courseID=ISTE-340");
    //    var returnCourse = JsonConvert.DeserializeObject<CourseModel>(loadedCourse);

    //    dynamic expando = new ExpandoObject();
    //    var comboModel = expando as IDictionary<string, object>;

    //    comboModel.Add("About", returnAbout);
    //    comboModel.Add("Course", returnCourse);
    //    comboModel.Add("pageTitle", "Test with a Dynamic Object");
    //    return View(comboModel);
    //}

    public async Task<IActionResult> Degree()
    {
        ViewData["nav"] = "Degrees";

        DataRetrieval dataR = new DataRetrieval();
        var loadedDegree = await dataR.getData("degrees/");

        var returnDegree = JsonConvert.DeserializeObject<DegreeModel>(loadedDegree);
        returnDegree.pageTitle = "Degrees";
        return View(returnDegree);
    }

    public async Task<IActionResult> Minor() {
        ViewData["nav"] = "Minors";

        DataRetrieval dataR = new DataRetrieval();
        var loadedMinor = await dataR.getData("minors/");
        var returnMinor = JsonConvert.DeserializeObject<MinorModel>(loadedMinor);
        returnMinor.pageTitle = "Minors";
        return View(returnMinor);
    }

    public async Task<IActionResult> getCourseInfo(string courseID) {
        DataRetrieval dataR = new DataRetrieval();
        var loadedCourse = await dataR.getData($"course/courseID={courseID}");
        var returnCourse = JsonConvert.DeserializeObject<CourseModel>(loadedCourse);
        return Json(returnCourse);
    }

    public async Task<IActionResult> Employment() {
        ViewData["nav"] = "Employment";

        DataRetrieval dataR = new DataRetrieval();
        var loadedEmployment = await dataR.getData("employment/");

        var returnEmployment = JsonConvert.DeserializeObject<EmploymentModel>(loadedEmployment);
        returnEmployment.pageTitle = "Employment";
        return View(returnEmployment);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

