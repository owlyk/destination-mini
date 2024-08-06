package src;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/fibonacci")
public class FibonacciResource {

    @GET
    public Response generateFibonacciSeries(@QueryParam("count") int count) {
        if (count <= 0) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Invalid count parameter").build();
        }

        List<Integer> fibonacciSeries = new ArrayList<>();
        int a = 0;
        int b = 1;
        fibonacciSeries.add(a);
        for (int i = 1; i < count; i++) {
            fibonacciSeries.add(b);
            int next = a + b;
            a = b;
            b = next;
        }

        return Response.ok(fibonacciSeries).build();
    }
}