echo "GET /api/bookmarks"
curl http://localhost:8080/api/bookmarks

echo "\n"

echo "POST /api/bookmarks"
curl -X POST http://localhost:8080/api/bookmarks -H "Content-Type: application/json" -d '{"title":"GitHub","url":"https://github.com"}'

echo "\n"

echo "GET /api/bookmarks/999"
curl http://localhost:8080/api/bookmarks/999

echo "\n"

echo "PATCH /api/bookmarks/1"
curl -X PATCH http://localhost:8080/api/bookmarks/1 -H "Content-Type: application/json" -d '{"title":"Updated Title"}'

echo "\n"

echo "DELETE /api/bookmarks/1"
curl -X DELETE http://localhost:8080/api/bookmarks/1
curl http://localhost:8080/api/bookmarks #check to verify that the bookmark was deleted