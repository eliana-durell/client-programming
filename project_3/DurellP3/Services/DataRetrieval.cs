using System;
using System.Net.Http.Headers;

namespace DurellP3.Services
{
	public class DataRetrieval
	{
		/*
		Task vs Threat
		Task has aync/await and a return value, no direct way to return from a thread
		task can do mmultiple things, thread can do one
		can cancel a task
		task is a highly lever concept  than a thread 
		 */
		public async Task<string> getData(string d)
		{
			//using statement -- at the end of the use }, it automatically calls the dispose method (trash collection)
			using (var client = new HttpClient()) {
				//all set up 
				client.BaseAddress = new Uri("https://ischool.gccis.rit.edu/api/");

				client.DefaultRequestHeaders.Accept.Clear();
                // long version 
                //client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                //short version
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
				try
				{
					//HttpResponseMessage response = new HttpResponseMessage();
					HttpResponseMessage response = await client.GetAsync(d, HttpCompletionOption.ResponseHeadersRead);
					response.EnsureSuccessStatusCode(); //200
														//go get it
					var data = await response.Content.ReadAsStringAsync();

					return data;
				}
				catch (HttpRequestException hre) {
					var msg = hre.Message;
					return "HttpRequestEx " + msg;
				}
				catch (Exception ex) {
					var msg = ex.Message;
					return "Exception " + msg;
				}
            }
		}


	}
}

