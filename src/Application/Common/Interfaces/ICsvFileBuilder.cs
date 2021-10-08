using Bible.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace Bible.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
